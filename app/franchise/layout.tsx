import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Franchise Opportunity",
    description: "Join India's leading precision-engineered aluminium interior brand. Apply for an ALUFURN franchise in your city.",
};

export default function FranchiseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
