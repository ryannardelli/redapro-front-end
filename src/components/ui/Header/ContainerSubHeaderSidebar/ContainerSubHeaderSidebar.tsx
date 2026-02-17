type ContainerSubHeaderSidebarProps = {
    children: React.ReactNode;
}

export function ContainerSubHeaderSidebar({ children }: ContainerSubHeaderSidebarProps) {
    return(
        <div className="flex items-center flex-1">
            {children}
        </div>
    );
}