
import { MouseEventHandler } from "react";

export interface FilterProps {
    manufacturers?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}


export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
