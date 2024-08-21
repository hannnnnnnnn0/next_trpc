import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = async (req: Request) => {
    const response = await fetchRequestHandler({
        endpoint: "/api/trpc",
        router: appRouter,
        req,
        createContext: () => ({}),
    });
    return response; // Response 객체 반환
};

export { handler as GET, handler as POST };