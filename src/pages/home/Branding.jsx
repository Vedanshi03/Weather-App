const Branding = () => {
  return (
    <>
      <div className="mb-1 ml-12 w-full text-left absolute top-3 bold">
        <h3 style={{ fontSize: '2.5rem', color: '#00308F', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', animation: 'bounce 1s infinite alternate' }}>Here's the Weather Update</h3>
      </div>
      <div className="mb-6 mt-4 lg:absolute lg:bottom-4 lg:my-0 w-full text-center font-semibold">
        Weather Station Dashboard
      </div>
    </>
  );
};

export default Branding;
