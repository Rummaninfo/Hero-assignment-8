import React, { useState, useEffect } from 'react';
import UseApp from '../Hooks/UseApp';
import AllCard from './AllCard';
import { BeatLoader } from 'react-spinners';

const Apps = () => {
    const { apps, loading: initialLoading } = UseApp();

    const [searching, setSearching] = useState([]);
    const [search, setSearch] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);

    useEffect(() => {
        if (apps && apps.length > 0) {
            setSearching(apps);
        }
    }, [apps]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearch(term);
        setSearchLoading(true);

        setTimeout(() => {
            if (term.trim() === '') {
                setSearching(apps);
            } else {
                const filtered = apps.filter((app) =>
                    app.title.toLowerCase().includes(term.toLowerCase())
                );
                setSearching(filtered);
            }
            setSearchLoading(false);
        }, 500);
    };

    return (
        <div>
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-semibold">Our Applications</h1>
                <p className="text-[#627382]">Explore all apps developed by us.</p>
            </div>

            <div className="flex justify-between mt-8">
                <div>
                    <h1 className="text-xl font-bold">({searching.length}) Apps Found</h1>
                  <hr  />
                 </div>
                 
                <label className="input validator join-item">
                    <input
                        value={search}
                        onChange={handleSearch}
                        type="search"
                        placeholder="All Products"
                        required
                    />
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                {initialLoading || searchLoading ? (
                    <div className="col-span-full flex justify-center items-center h-64">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-700 mx-auto mb-3"></div>
                            <BeatLoader />
                        </div>
                    </div>
                ) : searching.length > 0 ? (
                    searching.map((app) => (
                        <AllCard key={app.id || app._id || app.title} prev={app} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 text-lg mt-10">
                        <h1 className="text-5xl font-semibold">No Apps Found</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;
