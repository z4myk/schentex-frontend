import React from 'react'
import { Characters } from '../Characters'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { HowWeWork } from '../HowWeWork'


export const HomePage = () => {
    return (
        <div className="">
            <Header />
            <HowWeWork />
            <Characters/>
            <Contact />
           
        </div>
    )
}
