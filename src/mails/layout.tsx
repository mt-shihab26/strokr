import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import type { ReactNode } from "react";

export const Layout = ({
    preview,
    heading,
    action,
    url,
    children,
}: {
    preview: string;
    heading: string;
    action: string;
    url: string;
    children: ReactNode;
}) => {
    return (
        <Html lang="en">
            <Head />
            <Preview>{preview}</Preview>
            <Body style={{ backgroundColor: "#f3f4f6", fontFamily: "system-ui, sans-serif" }}>
                <Container
                    style={{
                        maxWidth: "480px",
                        margin: "40px auto",
                        padding: "32px",
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                    }}
                >
                    <Text
                        style={{
                            margin: 0,
                            fontFamily: "monospace",
                            fontSize: "14px",
                            color: "#6b7280",
                        }}
                    >
                        strokr
                    </Text>
                    <Heading style={{ margin: "16px 0 12px", fontSize: "20px", color: "#111827" }}>
                        {heading}
                    </Heading>
                    <Text
                        style={{
                            margin: "0 0 20px",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            color: "#374151",
                        }}
                    >
                        {children}
                    </Text>
                    <Section>
                        <Button
                            href={url}
                            style={{
                                display: "inline-block",
                                padding: "10px 16px",
                                backgroundColor: "#111827",
                                color: "#ffffff",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textDecoration: "none",
                            }}
                        >
                            {action}
                        </Button>
                    </Section>
                    <Text style={{ margin: "20px 0 0", fontSize: "12px", color: "#6b7280" }}>
                        If the button doesn't work, open this link:{" "}
                        <Link href={url} style={{ color: "#6b7280" }}>
                            {url}
                        </Link>
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};
