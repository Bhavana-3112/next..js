//optimization-->it refers to the various built-in features and techniques that improve the performance, speed, SEO, and user experience of your web application.


// Font Optimization-->Loads only the fonts needed.
// Reduces layout shifts and improves performance.

// Importing the Lobster font
import { Lobster } from 'next/font/google'
import Image from 'next/image'
import logo from '../../../public/LOGO.png'

// Load the font with options (weight, subset)
const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
})


//Image Lazy Loading-->Images are loaded only when they appear in the viewport, not before.
// This reduces initial load time and improves performance.

export default function OptimizePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        
        {/* Text with custom font */}
        <center><h1 className={`${lobster.className} text-5xl text-center text-black mt-8`}>
          Font & Image Optimization 
        </h1>
        </center>

       
        <div className="mt-6 ">
            <center>
                <Image
                    src={logo}
                    alt="logo"
                    width={500}
                    height={500}
                    className="rounded-lg block"
                    placeholder="blur"
                    priority
                />
            </center>
        </div>

      </div>
    </main>
  )
}
