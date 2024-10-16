import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRespository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './erros/user-already-exists-error'
import { InMemoryGymsRespository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRespository
let sut: CreateGymUseCase

describe('Create Gym Use Case', ()=>{
    beforeEach(()=>{
        gymsRepository = new InMemoryGymsRespository()
        sut = new CreateGymUseCase(gymsRepository)
    })
    it('should be able to create gym', async ()=>{
        const { gym } = await sut.execute({
            title: 'Javascript Gym',
            description: null,
            phone: null,
            latitude: -22.8930312,
            longitude: -43.3584274,
        })

        expect(gym.id).toEqual(expect.any(String))
    })

})