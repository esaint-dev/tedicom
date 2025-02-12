import React from "react";
import ProjectGalleryUnit from "./ProjectGalleryUnit";

const ProjectGallery = () => {
    return (
        <section className="grid grid-cols-3 justify-center px-[20px] py-[20px] lg:px-[40px] lg:py-[50px] gap-[15px] sm:gap-[35px]">
            <ProjectGalleryUnit background={'/blur.svg'} image={'/fintech.svg'} heading={'FINTECH'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/health.svg'} heading={'HEALTH'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/legal.svg'} heading={'LEGAL'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/media.svg'} heading={'MEDIA AND ENTERTAINMENT'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/edtech.svg'} heading={'EDTECH'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/ecommerce.svg'} heading={'ECOMMERCE'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/fintech.svg'} heading={'FINTECH'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/health.svg'} heading={'HEALTH'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/legal.svg'} heading={'LEGAL'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/media.svg'} heading={'MEDIA AND ENTERTAINMENT'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/edtech.svg'} heading={'EDTECH'} text={'Optimum quality in good grade'}/>
            <ProjectGalleryUnit background={'/blur.svg'} image={'/ecommerce.svg'} heading={'ECOMMERCE'} text={'Optimum quality in good grade'}/>
        </section>
    );
};

export default ProjectGallery;
