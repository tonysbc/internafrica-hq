import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface AdminEmailProps {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  destination: string;
  startDate: string;
  endDate: string;
  program: string;
}

export const AdminEmail = ({
  name,
  lastname,
  email,
  phone,
  destination,
  startDate,
  endDate,
  program,
}: AdminEmailProps) => {
  const previewText = `New Application from ${name} ${lastname}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#004d40", // Your Deep Teal
                accent: "#ffb300",  // Your Amber/Gold
              },
            },
          },
        }}
      >
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white border border-gray-200 mx-auto my-10 rounded-lg overflow-hidden shadow-sm max-w-[600px]">
            
            {/* Header */}
            <Section className="bg-[#004d40] p-8 text-center">
              <Heading className="text-white text-2xl font-bold m-0">
                Intern Africa HQ
              </Heading>
              <Text className="text-[#ffb300] text-sm font-bold uppercase tracking-wider mt-2">
                New Candidate Application
              </Text>
            </Section>

            {/* Content */}
            <Section className="p-8">
              <Text className="text-gray-700 text-lg leading-relaxed mb-6">
                You have received a new application for the <strong>{destination}</strong> program.
              </Text>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Heading as="h3" className="text-gray-800 text-lg font-bold mb-4 mt-0">
                  👤 Candidate Details
                </Heading>
                <Text className="text-gray-600 my-1">
                  <strong>Name:</strong> {name} {lastname}
                </Text>
                <Text className="text-gray-600 my-1">
                  <strong>Email:</strong> <a href={`mailto:${email}`} className="text-[#004d40] underline">{email}</a>
                </Text>
                <Text className="text-gray-600 my-1">
                  <strong>Phone:</strong> <a href={`tel:${phone}`} className="text-gray-800">{phone}</a>
                </Text>
              </div>

              <Hr className="border-gray-200 my-6" />

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Heading as="h3" className="text-gray-800 text-lg font-bold mb-4 mt-0">
                  ✈️ Trip Information
                </Heading>
                <Text className="text-gray-600 my-1">
                  <strong>Program Interest:</strong> {program}
                </Text>
                <Text className="text-gray-600 my-1">
                  <strong>Destination:</strong> {destination}
                </Text>
                <Text className="text-gray-600 my-1">
                  <strong>Dates:</strong> {startDate} to {endDate}
                </Text>
              </div>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-50 p-6 text-center border-t border-gray-200">
              <Text className="text-gray-500 text-xs">
                © 2025 Intern Africa HQ. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AdminEmail;