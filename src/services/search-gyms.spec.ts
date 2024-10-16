import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRespository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRespository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', ()=>{
    beforeEach(async ()=>{
        gymsRepository = new InMemoryGymsRespository()
        sut = new SearchGymsUseCase(gymsRepository)
    })

    it('should be able to search for gyms', async ()=>{
        await gymsRepository.create({
            title: 'JavaScript Gym',
            description: null,
            phone: null,
            latitude: -22.8930312,
            longitude: -43.3584274,
        })

        await gymsRepository.create({
            title: 'TypeScript Gym',
            description: null,
            phone: null,
            latitude: -22.8930312,
            longitude: -43.3584274,
        })

        const { gyms } = await sut.execute({
            query: 'JavaScript',
            page: 1,
        })


        expect(gyms).toHaveLength(1)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'JavaScript Gym' }),
        ])
    })

    it('should be able to fetch paginated gym search', async ()=>{
        for (let i = 1; i <= 22; i++){
            await gymsRepository.create({
                title: `JavaScript Gym ${i}`,
                description: null,
                phone: null,
                latitude: -22.8930312,
                longitude: -43.3584274,
            })
        }

        const { gyms } = await sut.execute({
            query: 'JavaScript',
            page: 2,
        })


        expect(gyms).toHaveLength(2)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'JavaScript Gym 21' }),
            expect.objectContaining({ title: 'JavaScript Gym 22' }),
        ])
    })
})
