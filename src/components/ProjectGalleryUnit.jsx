import React from "react";

const ProjectGalleryUnit = ({ background, image, heading, text }) => {
    return (
        <div className="flex flex-col  gap-[2px]">
            <div
                style={{ backgroundImage: `url(${background})` }}
                className="bg-cover bg-center p-[10px] rounded-[8px] flex justify-center items-center"
            >
                <img className="w-[200px]" src={image} alt="" />
            </div>

            <p className="text-[6px] sm:text-[12px] lg:text-[18px]">{heading}</p>
            <p className="font-bold text-[6px] sm:text-[10px] lg:text-[16px]">{text}</p>
        </div>
    );
};

export default ProjectGalleryUnit;
