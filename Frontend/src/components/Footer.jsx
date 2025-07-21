import React from 'react'

 export const Footer = () => {
  return (
    <div>
        <footer className="border-t border-white/10 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} QuickVid. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  )
}
