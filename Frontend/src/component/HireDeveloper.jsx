import React from 'react';
import Sub_Header from './Sub_Header';
import Days from './about-us/Days';

export default function WeboumContactForm() {
  return (
    <>
    <Sub_Header title='Hire-Developer'/>
    <div className="flex flex-col min-h-screen bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-purple-500"></div>
          <div className="absolute bottom-40 left-20 w-6 h-6 rounded-full bg-purple-300"></div>
          <div className="absolute top-40 left-40 w-2 h-2 rounded-full bg-purple-400"></div>
          <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-purple-200"></div>
          
          {/* Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100" x2="240" y2="400" stroke="#f0f0f0" strokeWidth="2" />
            <line x1="100" y1="0" x2="400" y2="500" stroke="#f0f0f0" strokeWidth="2" />
            <line x1="200" y1="100" x2="300" y2="300" stroke="#f0f0f0" strokeWidth="2" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 z-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-purple-900">Weboum – Send Us A Message</h2>
          <div className="h-1 w-full bg-purple-700 mt-2"></div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-6">
              Do You Have Any Questions? We'll Be Happy To Assist!
            </h1>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-purple-900 flex items-center justify-center text-purple-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-purple-900 flex items-center justify-center text-purple-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-purple-900 flex items-center justify-center text-purple-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="md:w-1/2">
            <div className="mb-8">
              <h3 className="font-medium mb-4">Stage</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  New System to be built from scratch
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  System Improvement to continue development 
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-4">Services needed</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Web development
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Mobile development
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Minimum Viable Product
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Secure Hosting & Maintenance
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Dedicated development team
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Ongoing System Innovations
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Internet of things
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-4">Development stages needed</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  UX/UI design
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Development
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Software deployment
                </div>
                <div className="px-4 py-2 rounded-full border border-gray-300 text-sm">
                  Maintenance and support
                </div>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-purple-900 text-white font-bold uppercase rounded-md mt-4">
              Continue
            </button>
          </div>
        </div>
      </div>
      
      {/* Chat button */}
      <div className="fixed bottom-4 right-4">
        <button className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#000000" strokeWidth="1.5"/>
              <path d="M8 12H8.01" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 12H12.01" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 12H16.01" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
    <Days/>
    </>
  );
}