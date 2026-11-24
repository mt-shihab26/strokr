export const FaviconIcon = ({ brand, ink }: { brand: string; ink: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <rect width={32} height={32} rx={9} fill={brand} />
            <g stroke={ink} strokeLinecap="round" strokeWidth={3}>
                <path d="M6.5 11h8" />
                <path d="M9 16.5h5.5" strokeOpacity="0.7" />
            </g>
            <rect x="18.5" y={7} width="3.5" height={18} rx="1.75" fill={ink} />
        </svg>
    );
};
