import { Main } from "./component"

export const Brand = () => {
  return (
    <Main>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/todoist.svg" alt="Todoist Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/slack-icon.svg" alt="Slack Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/typeform.svg" alt="Typeform Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/algolia.svg" alt="Algolia Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/postcss.svg" alt="Postcss Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/tailwindcss.svg" alt="TailwindCSS Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/discord.svg" alt="Discord Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/vimeo.svg" alt="Vimeo Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/campfire.svg" alt="Campfire Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/android.svg" alt="Android Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/atlassian.svg" alt="Atlassian Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/apple.svg" alt="Apple Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/google.svg" alt="Google Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/zeplin.svg" alt="Zeplin Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/visual-studio-code.svg" alt="VSCode Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://kutty.netlify.app/logos/ycombinator.svg" alt="Ycombinator Logo" className="block object-contain h-12" />
          </div>
        </div>
        <p className="mt-16 text-base font-medium text-center text-gray-500">
          From startups to Fortune 500s, the worlds best teams use our tool to power their internal apps.
          <a href="#" className="inline-flex items-center justify-center text-primary hover:text-primary-dark">
            Our customers
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline w-3 h-3 ml-1">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </p>
      </section>
    </Main>

  )
}