/* eslint-disable react/prop-types */

const CategoryCard = ({image, role, description, isInFocus}) => {
  return (
    <div style={{ backgroundColor: 'red', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }} className="bg-red-600 h-[320px] rounded-3xl text-yellow-300 px-5 py-10 flex flex-col justify-between gap-2 items-center relative">
      
      <h1 className="text-2xl font-bold absolute bottom-[320px]">{role}</h1>
        <img src={image} alt="" className="w-[60px] h-[60px] " />
        <p className="text-center text-lg">{description}</p>
        <div>
        </div>
    </div>
  )
}

export default CategoryCard;