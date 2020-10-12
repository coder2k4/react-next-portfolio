
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';

const Secret = () => {
    return (
        <BaseLayout>
            <BasePage>
                <h1>I am Secrete Page</h1>
            </BasePage>
        </BaseLayout>
    )
}

//todo
// redirect component with ssr
// hoc withAuth
// serverside props
// rework hoc for ssr
export default Secret;
