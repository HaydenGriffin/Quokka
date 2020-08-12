import React from 'react'
import {FC} from 'react';
import {ReactComponent as ThreeDots} from '../assets/icons/more-horizontal.svg';

const ProjectTile: FC = () => {
    return (
        <div className="relative">
                <div className="bg-red-600 w-12 h-12 rounded-full text-center absolute top-0 left-0 z-10">
                    <p className="pt-2 text-xl">1</p>
                </div>
                <div className="bg-white rounded-md w-64 h- p-5 relative">
                    <ThreeDots className="absolute top-0 right-0 mr-4 mt-4"/>
                    <h1 className="pt-8 text-3xl">Ed Sheeran</h1>
                    <p className="text-xs text-gray-600">Current set</p>
                    <h3 className="pb-12">Divide 2019</h3>
                    <section className="flex">
                        <div className="flex mr-4">
                            <div className="bg-green-500 w-1 h-12 mr-2"></div>
                            <div>
                                <p className="text-xs text-gray-600">sets</p>
                                <h4>3</h4>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-blue-500 w-1 h-12 mr-2"></div>
                            <div>
                                <p className="text-xs text-gray-600">Tracks</p>
                                <h4>24</h4>
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>
    )
  
  }
export default ProjectTile


