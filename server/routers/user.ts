import { procedure, router } from "../trpc";
import { z } from "zod"

export const userRouter = router({
    getUsers: procedure.query(() => {
        return [
            {name: "han", race:"Orc"},
            {name: "yeong", race:"Orc"}
        ];
    }),
    addUser: procedure.input(z.object({ name: z.string(), race: z.string() }))
        .mutation((opts) => {
            const { input } = opts;
        }),
});