import { FastifyRequest, FastifyReply } from "fastify"
import { makeGetUserMetricsUserCase } from "@/services/factories/make-get-user-metrics-use-case"

export async function metrics(request:FastifyRequest, reply:FastifyReply){
    const getUserMetricsUseCase = makeGetUserMetricsUserCase()
    
    const { checkInsCount } = await getUserMetricsUseCase.execute({
        userId: request.user.sub,
    })

    return reply.status(200).send({
        checkInsCount,
    })
}