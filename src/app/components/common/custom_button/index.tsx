import Link from "next/link";
const CustomButton = (props: any) => {

    const { text, anchor, ...rest } = props;

    return (
        <>
            {anchor ? <Link className="btn dbtn" {...rest}>{text}</Link> : <button className="btn dbtn" {...rest}>{text}</button>}

        </>
    )
}

export default CustomButton;