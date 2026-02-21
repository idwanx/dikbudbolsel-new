export default function ValidationErrors({ errors }: any) {
    return (
        Object.keys(errors).length > 0 && (
            <>
                <ul className="mt-1 pl-4 list-disc list-outside text-sm text-red-600">
                    {Object.keys(errors).map(function (key, index) {
                        return <li key={index}>{errors[key]}</li>;
                    })}
                </ul>
            </>
        )
    );
}
