import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  return (
    <div className="bg-[#3D2E2E] text-white rounded-xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Security Insights</h2>
        <p className="text-gray-300 mb-8">
          Join our newsletter to receive the latest security news, trends, and expert analysis directly to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-md flex-grow text-gray-900 focus:outline-none"
            required
          />
          <Button type="submit" className="bg-white text-[#3D2E2E] hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
            Subscribe
          </Button>
        </form>
        <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  )
}

