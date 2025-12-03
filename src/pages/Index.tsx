import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Zap, 
  Trophy, 
  Settings, 
  Globe, 
  Play,
  Star,
  Download,
  Menu,
  Mail,
  Gamepad2,
  CircleUserRound,
  Languages
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg shadow-primary/30">
              Q
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">Quizmo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
            <a href="https://play.google.com/store/apps/details?id=com.quizmo.app&hl=en" target="_blank" rel="noopener noreferrer">
              <Button className="hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </a>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Star className="w-4 h-4 fill-primary" />
                <span>The #1 Multiplayer Quiz Game</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
                Play Trivia <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Together</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join rooms, answer questions simultaneously with friends, and compete on the live leaderboard. No sign-up required—just jump in and play!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.quizmo.app&hl=en" target="_blank" rel="noopener noreferrer">
                  <Button className="hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                    <Download className="w-5 h-5 mr-2" />
                    Download on Google Play
                  </Button>
                </a>
                <Button variant="ghost" className="h-14 px-8 rounded-full text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative z-10 w-full max-w-[500px] lg:max-w-none">
              <div className="relative mx-auto w-[280px] md:w-[320px]">
                {/* Background Effects */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                
                {/* Phone Mockup */}
                <div className="relative z-10 phone-mockup bg-black">
                  <img 
                    alt="Quizmo App Gameplay" 
                    className="w-full h-auto block" 
                    src="./images/unnamed (2).png"
                  />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -right-12 top-1/4 floating-card flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Player Joined</p>
                    <p className="text-sm font-bold">Ahmed</p>
                  </div>
                </div>
                
                <div className="absolute -left-12 bottom-1/4 floating-card flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Live Score</p>
                    <p className="text-sm font-bold">Updated!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Quizmo?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for the perfect group trivia night, classroom activity, or friendly competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Real-Time Multiplayer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Everyone sees the same question at the same time. No waiting around—pure synchronized fun.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Room-Based System</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a private room and share the 4-digit code. Friends can join instantly from anywhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-pink-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CircleUserRound className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Customizable Avatars</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Express yourself! Choose from a variety of cute and cool avatars before entering the game.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Live Scoreboard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Watch the rankings change in real-time after every question. The suspense is real!
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Simple Setup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No accounts, no passwords. Just enter your name, join a room, and start playing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Languages className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Multi-Language</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully supported in both English and Arabic. Play in the language you're most comfortable with.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">See it in Action</h2>
          </div>
          
          <div className="flex flex-col gap-20">
            {/* Waiting Room */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 order-2 lg:order-1">
                <div className="bg-muted rounded-2xl p-2 md:p-4 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    alt="Waiting Room" 
                    className="rounded-xl w-full shadow-inner" 
                    src="./images/unnamed.png"
                  />
                </div>
              </div>
              <div className="flex-1 lg:max-w-md order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-4">Gather Your Squad</h3>
                <p className="text-lg text-muted-foreground">
                  The waiting room shows everyone who has joined. Share the room code and watch the player list fill up with your friends' avatars.
                </p>
              </div>
            </div>
            
            {/* Leaderboard */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
              <div className="flex-1 relative">
                <div className="flex justify-center items-center gap-4 md:gap-8">
                  <div className="w-40 md:w-64 bg-black rounded-[2rem] border-[6px] border-gray-800 overflow-hidden shadow-2xl -rotate-6 mt-12">
                    <img alt="Player List" className="w-full" src="./images/unnamed (1).png" />
                  </div>
                  <div className="w-full md:w-[500px] bg-black rounded-[1.5rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl rotate-3 z-10">
                    <img alt="Leaderboard" className="w-full" src="./images/unnamed (3).png" />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:max-w-md">
                <h3 className="text-3xl font-bold mb-4">Who's the Champion?</h3>
                <p className="text-lg text-muted-foreground">
                  Compete for the crown! The live scoreboard updates instantly. See who's leading the pack and who needs to catch up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download Quizmo now and start hosting your own quiz games instantly.
          </p>
          
          <a href="https://play.google.com/store/apps/details?id=com.quizmo.app&hl=en" target="_blank" rel="noopener noreferrer">
            <Button className="hover-elevate active-elevate-2 bg-secondary text-secondary-foreground border border-secondary-border h-16 px-10 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-transform">
              <Download className="w-6 h-6 mr-2" />
              Download Now
            </Button>
          </a>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-lg mx-auto mb-8 border border-white/20 mt-12">
            <p className="font-medium mb-2">❤️ Enjoying the game?</p>
            <p className="text-sm opacity-90">
              Don't forget to rate the app & send us your feedback! We love hearing from our players.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold font-heading text-xl">
                Q
              </div>
              <span className="font-heading font-bold text-2xl text-foreground">Quizmo</span>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <a 
                href="mailto:contact@quizmo.app" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@quizmo.app</span>
              </a>
              <p className="text-sm text-muted-foreground">
                © 2025 Quizmo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;