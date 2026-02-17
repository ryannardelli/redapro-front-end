type ContainerHeaderSidebarProps = {
    children: React.ReactNode;
}

export function ContainerHeaderSidebar({ children }: ContainerHeaderSidebarProps) {
    return(
         <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-6 flex items-center justify-between">
            {children}
         </header>
    );
}