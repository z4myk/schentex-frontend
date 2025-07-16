import React from 'react'
import { Characters } from '../Characters'
import { Header } from '../Header'
import { HowWeWork } from '../HowWeWork'

export const HomePage = () => {
    return (
        <div className="">
            <Header />
            <HowWeWork />
            <Characters/>
        </div>
    )
}
