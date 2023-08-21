import React, { useState } from 'react'

function Twitter() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]

    setSelectedImage(file || null)
  }

  const handleUpload = () => {
    console.log('Uploaded : ' + selectedImage)
  }

  return (
    <>
      <img
        className="object-fit h-28 rounded-full"
        src={
          selectedImage
            ? URL.createObjectURL(selectedImage)
            : 'https://i.pinimg.com/736x/1e/94/7d/1e947dfcaad552afa209bceebbfac47b.jpg'
        }
        alt="profile picture place holder"
      />

      <input type="file" accept="image/" onChange={handleImageChange} />
    </>
  )
}

export default Twitter
