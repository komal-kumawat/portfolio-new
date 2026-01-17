import React from 'react'

const About = () => {
  return (
    <div className='h-[200vh] relative flex items-center' >
      about
      Ah! Now I understand perfectly 😊 — you want the navbar background to cover the full width of the page (so it looks like a proper fixed navbar with blur), but the content inside the navbar (title + links) should be centralized with a max width of 700px, just like your page content.

This is very common in modern UIs. You don’t set w-[700px] on the navbar itself — instead, you wrap the inner content with a max-width container.
    </div>
  )
}

export default About
