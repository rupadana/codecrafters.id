const CallUsSection = () => {
  return (
    <section id='about-us'>
      <div className='container container-fit p-6 mt-14'>
        <div className='gradient rounded-full text-center p-3 md:text-xl lg:text-3xl lg:p-6'>
          <h1 className='font-medium text-white inline-block'>Wanna Crafting Something Great?</h1>
          <h1
            className='font-medium inline-block cursor-pointer ml-1 hover:underline'
            onClick={() => {
              window.open('https://wa.me/6283119030893', '_blank');
            }}>
            Hubungi Kami
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CallUsSection;
