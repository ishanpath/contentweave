import { NavBar } from "@/components/Navbar";
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedinIcon,
  RocketIcon,
  SparklesIcon,
  TrendingUpIcon,
  TwitterIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignUpButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100 overflow-hidden pt-20">
      <NavBar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-20 left-10 animate-float">
          <SparklesIcon className="w-8 h-8 text-yellow-400 opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <ZapIcon className="w-10 h-10 text-blue-400 opacity-50" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-2000">
          <TrendingUpIcon className="w-12 h-12 text-green-400 opacity-50" />
        </div>
      </main>

      <div className="text-center py-20 lg:py-32 relative">
        <RocketIcon className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          AI-Powered Social Media Content Generator
        </h1>
        <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
          Create engaging content for Twitter, Instagram, and LinkedIn with
          cutting-edge AI technology.
        </p>
        <div className="flex justify-center space-x-4">
          {userId ? (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/generate">Start Creating</Link>
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Start Creating
              </Button>
            </SignUpButton>
          )}
          <Button
            asChild
            className="bg-transparent border border-blue-600 text-blue-600"
          >
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="py-20" id="features">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">
          Supercharge Your Social Media Presence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Twitter Threads",
              icon: <TwitterIcon className="w-10 h-10 mb-4 text-blue-400" />,
              description:
                "Generate compelling Twitter threads that engage your audience and boost your reach.",
            },
            {
              title: "Instagram Captions",
              icon: <InstagramIcon className="w-10 h-10 mb-4 text-pink-400" />,
              description:
                "Create catchy captions for your Instagram posts that increase engagement and followers.",
            },
            {
              title: "LinkedIn Posts",
              icon: <LinkedinIcon className="w-10 h-10 mb-4 text-blue-400" />,
              description:
                "Craft professional content to create opportunities and expand your network.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-black transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Ready to revolutionize your social media strategy?
        </h2>
        {userId ? (
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/generate">
              Generate Content Now <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        ) : (
          <SignUpButton mode="modal">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started Free <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </SignUpButton>
        )}
        <p className="mt-4 text-gray-400">No credit card required</p>
      </div>
    </div>
  );
}
