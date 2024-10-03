import React, { useState } from "react";
import {
  Spinner,
  Alert,
  AlertIcon,
  ChakraProvider,
  Input,
  Textarea,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Phone", formData.Phone);
    data.append("Subject", formData.Subject);
    data.append("Message", formData.Message);

    const sheetUrl =
      "https://script.google.com/macros/s/AKfycbztO84YozsxkytHR9B6zCQ2rTBf4j9R3WipULkx8rZN4ZU8EAoOmoC-StSwkwQoCTn9/exec";
    try {
      const res = await fetch(sheetUrl, {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      console.log("Server response:", json);

      if (res.ok && json.result === "success") {
        setSuccess("Your opinion has been recorded successfully! We will try to contact you soon 😊");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Subject: "",
          Message: "",
        });
      } else {
        throw new Error(json.result || "Unexpected response from the server.");
      }
    } catch (err: any) {
      setError(err.message || "There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChakraProvider>
      <div className="Contact py-4">
        <Heading as="h1" size="lg" fontFamily={'Permanent_Marker'} textAlign="center" mb={4} >
          Share your Opinion
        </Heading>

        <Flex justify="center">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 p-4">
            <Flex gap={4} direction={{ base: "column", md: "row" }}>
              <Input
                placeholder="Your Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                isRequired
              />
              <Input
                placeholder="Your Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                type="email"
                isRequired
              />
              <Input
                placeholder="Your Phone number"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                type="tel"
              />
            </Flex>

            <Flex gap={4} direction={{ base: "column", md: "row" }}>
              <Input
                placeholder="The subject"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
              />
              <Textarea
                placeholder="Your Message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                rows={4}
              />
            </Flex>

            <Button
              type="submit"
              colorScheme="green"
              isLoading={loading}
              alignSelf="flex-end"
              width={{ base: "full", md: "auto" }}
            >
              {loading ? <Spinner size="sm" /> : "Share"}
            </Button>
          </form>
        </Flex>

        {success && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            {success}
          </Alert>
        )}
        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
      </div>
    </ChakraProvider>
  );
}
