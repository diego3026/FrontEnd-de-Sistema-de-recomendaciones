import { useAuth } from '@/Context/AuthContext';
import { useSelect } from '@/Context/Context';
import ApiService from '@/apiCalls.service/apiCalls.service';
import React, { useEffect, useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa6';
import Select from 'react-select';

const Ubicacion: React.FC = () => {
    // const [isClearable, setIsClearable] = useState(true);
    // const [isSearchable, setIsSearchable] = useState(true);
    // const [isDisabled, setIsDisabled] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isRtl, setIsRtl] = useState(false);
    const auth = useAuth()
    const apiService = new ApiService(auth.token);
    const {selectUbi, setSelectUbi} = useSelect()

    const handleChange = (selectOption: any) => {
        setSelectUbi(selectOption)
    }

    function formatText(text:string){
        const words = text.split("-").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return words.join(' ');
    }

    interface Ciudad {
        nombre: string | any | null;
    }

    const [ciudadesData, setData] = useState<Ciudad[] | undefined | any>([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService.get(`/api/ciudades/`);
                const ciudades: Ciudad[] = response.map((item: any) => ({
                    value: item.nombre,
                    label: formatText(item.nombre),
                }));
                setData(ciudades);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            background: 'transparent',
            display: 'flex',
            flexWrap: 'nowrap',
            width: 'max-content',
            textAlign: 'center',
            borderColor: 'black',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: "var(--darkOrange)"
        }),
        menu: (provided: any) => ({
            ...provided,
            background: '#FFFF',
        }),
        placeholder: (defaultStyles: any) => {
            return {
                ...defaultStyles,
                color: 'var(--darkOrange)',
                fontSize: 'medium',
            }
        },
    };

    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                value={selectUbi}
                onChange={handleChange}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                placeholder="Tu ubicacion"
                options={ciudadesData}
                styles={customStyles}
            />
        </>
    );
};

export default Ubicacion
