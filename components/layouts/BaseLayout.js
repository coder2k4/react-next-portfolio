
import Header from '@/components/shared/Header';

const BaseLayout = props => {
    const { className, children, data,error,loading } = props;
    return (
        <div className="layout-container">
            <Header data={data} error={error} loading={loading} />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default BaseLayout;
