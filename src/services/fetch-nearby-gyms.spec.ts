import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRespository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRespository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', ()=>{
    beforeEach(async ()=>{
        gymsRepository = new InMemoryGymsRespository()
        sut = new FetchNearbyGymsUseCase(gymsRepository)
    })

    it('should be able to fetch nearby gyms', async ()=>{
        await gymsRepository.create({
            title: 'Near Gym',
            description: null,
            phone: null,
            latitude: -22.8930312,
            longitude: -43.3584274,
        })

        await gymsRepository.create({
            title: 'Far Gym',
            description: null,
            phone: null,
            latitude: -22.8643258,
            longitude: -43.7731567,
        })

        const { gyms } = await sut.execute({
            userLatitude: -22.8930312,
            userLongitude: -43.3584274,
        })


        expect(gyms).toHaveLength(1)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'Near Gym' }),
        ])
    })
})
