import { Footer } from './components/footer';
import { Header } from './components/header';
import { PostsSection } from './components/posts-section';
import { ProjectsSection } from './components/projects-section';
import { UserSection } from './components/user-section';

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-[720px] mx-auto bg-white dark:bg-zinc-800">
        <Header />
        <UserSection />
        <ProjectsSection />
        <PostsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
