const About = () => {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about Frost Emission and our commitment to excellence
          </p>
        </div>
        
        {/* About content will go here */}
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            About Page Content
          </h2>
          <p className="text-gray-600">
            Company information and history will be displayed here.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About 