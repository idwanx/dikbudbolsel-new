import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center justify-center">
                <img className="h-8 w-7.5" src="/apple-touch-icon.png" alt="" />
                <div className="ml-2 overflow-hidden leading-[1]">
                    <p className="text-sm font-extrabold text-foreground tracking-[.12em]">DIKBUD</p>
                    <p className="text-sm/4 font-extrabold text-red-500 tracking-[.10em]">BOLSEL</p>
                </div>
            </div>
        </>
    );
}
