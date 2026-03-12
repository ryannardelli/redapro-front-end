type ContainerHeaderHistoryProps = {
    children: React.ReactNode;
}

export function ContainerHeaderHistory({ children }: ContainerHeaderHistoryProps) {
    return(
        <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            {children}
        </div>
    );
}