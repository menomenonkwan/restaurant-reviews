import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { hero } from '../styles/home.module.css'
import { content } from '../styles/about.module.css'

export default function About() {
  return (
    <Layout pageTitle="About Me">
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            maxHeight: 400,
          }}
          layout="fullWidth"
          aspectRatio={3 / 1}
          alt=""
          src={"../images/about.jpg"}
          formats={["auto", "webp", "avif"]}
        />
        <div className={hero}>
          <div>
            <h1>
              Brannon Lee
            </h1>
            <h3>The Who, What, Where, When, and Why of it all</h3>
          </div>
        </div>
      </div>
      <div className={content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi vitae sed eligendi corrupti, quas laudantium ipsa magni quo omnis. Distinctio quis nihil, nulla recusandae quas atque corrupti sunt in. Eos quas dolorem cumque! Totam eaque nesciunt amet alias minus fuga dicta quidem ipsam est, quasi nulla laborum possimus adipisci illo perferendis repellat temporibus dolores, sint fugit. Recusandae, ex? Hic.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum itaque asperiores cupiditate ab. Eaque totam repellendus tempora, id, vero odio iusto, esse harum accusamus commodi magnam perspiciatis nihil natus impedit!
        Dolor tempora asperiores et veniam id. Veniam omnis sunt, culpa, unde, odio ipsum voluptatibus dicta harum fugiat aliquam deserunt est minima ipsa voluptas laboriosam rem dolorem eaque at enim ipsam.
        Eius, voluptatibus aspernatur consequatur soluta nulla harum quos ratione minima in ducimus eum quae ab porro, eaque id amet. Pariatur nobis consequuntur reprehenderit veniam tempora nihil odit perferendis voluptatibus facilis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque ullam aspernatur nisi, sint quae dicta illum vero, sapiente dolor mollitia vitae possimus, pariatur earum voluptatum facilis placeat reiciendis neque.
        Soluta magnam alias repellat expedita consectetur, libero iure nihil ullam quisquam, iste autem odio sint hic distinctio cumque eveniet eius fugit quis odit recusandae vel velit nesciunt debitis veritatis. Dolor!
        Ab delectus itaque ad sequi beatae id consequuntur atque inventore, cupiditate repellendus similique quam, ipsum dolore excepturi, corporis voluptatem praesentium vero consectetur temporibus! At a, in numquam expedita odit perferendis?
        Aliquam ea fugiat recusandae iure omnis pariatur fugit distinctio, cum tempora debitis quisquam unde quam suscipit! Omnis libero reiciendis illum nemo excepturi doloremque? Ullam voluptates, quod est obcaecati quis consequatur!</p>
      </div>
    </Layout>
  )
}
