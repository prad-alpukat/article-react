import React from 'react'
import CardArticle2 from '../blocks/CardArticle2'

export default function SectionCatalog2() {
    return (
        <section className='container'>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10'>
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
                <CardArticle2 />
            </div>

        </section>
    )
}
