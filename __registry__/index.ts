import React from "react";

export const components = {
  "sidebar-01": {
    name: "Sidebar-01",
    type: "registry:block",
    registryDependencies: [
      "button",
      "popover",
      "separator",
      "input",
      "command",
    ],
    files: [
      {
        type: "registry:block",
        content:
          'import { AccountSwitcher } from "./account-switcher";\r\nimport React, { useState } from "react";\r\nimport SearchInput from "./search";\r\nimport NavigationMenu from "./navigation-menu";\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst Sidebar1 = () => {\r\n  const [isMinimized, setIsMinimized] = useState(false);\r\n  return (\r\n    <aside\r\n      onMouseEnter={() => setIsMinimized(false)}\r\n      onMouseLeave={() => setIsMinimized(true)}\r\n      className={cn(\r\n        "flex flex-col w-fit gap-4 border p-3 rounded-lg bg-stone-100 dark:bg-stone-900 h-svh transition-all duration-300 sticky top-0 z-10",\r\n        isMinimized ? "w-[75px]" : "w-[300px]"\r\n      )}\r\n    >\r\n      <AccountSwitcher isMinimized={isMinimized} />\r\n      <SearchInput isMinimized={isMinimized} />\r\n      <NavigationMenu isMinimized={isMinimized} />\r\n    </aside>\r\n  );\r\n};\r\n\r\nexport default Sidebar1;\r\n',
        path: "block/sidebar-01/sidebar-01.tsx",
        target: "components/block/sidebar-01/sidebar-01.tsx",
      },
      {
        type: "registry:block",
        content:
          '"use client";\r\n\r\nimport { cn } from "@/lib/utils";\r\nimport {\r\n  Popover,\r\n  PopoverContent,\r\n  PopoverTrigger,\r\n} from "@/components/ui/popover";\r\nimport Image from "next/image";\r\nimport { Boxes, LucideIcon, ChevronsUpDownIcon } from "lucide-react";\r\nimport { useState } from "react";\r\n\r\nconst Accounts = [\r\n  {\r\n    id: 1,\r\n    name: "Brett",\r\n    email: "brettw@gmail.com",\r\n    image:\r\n      "https://api.dicebear.com/9.x/avataaars/png?seed=Mason&backgroundColor=ffdfbf",\r\n    icon: Boxes,\r\n  },\r\n  {\r\n    id: 2,\r\n    name: "Diwanshu Midha",\r\n    email: "diwanshum@gmail.com",\r\n    image:\r\n      "https://api.dicebear.com/9.x/avataaars/png?seed=Amaya&backgroundColor=ffdfbf",\r\n    icon: Boxes,\r\n  },\r\n  {\r\n    id: 3,\r\n    name: "John Doe",\r\n    email: "johnd@gmail.com",\r\n    image:\r\n      "https://api.dicebear.com/9.x/avataaars/png?seed=Christian&backgroundColor=ffdfbf",\r\n    icon: Boxes,\r\n  },\r\n];\r\n\r\nexport function AccountSwitcher({ isMinimized }: { isMinimized?: boolean }) {\r\n  const [open, setOpen] = useState(false);\r\n  const [selectedAccount, setSelectedAccount] = useState(Accounts[0]);\r\n\r\n  return (\r\n    <Popover open={open} onOpenChange={setOpen}>\r\n      <PopoverTrigger\r\n        className={cn(\r\n          "grid grid-cols-[50px_1fr_20px] bg-card gap-3 p-2 shadow-sm border-border border rounded-lg hover:bg-muted",\r\n          isMinimized && "px-0 border-none"\r\n        )}\r\n      >\r\n        <div className="relative w-[50px]">\r\n          <Image\r\n            src={selectedAccount.image}\r\n            alt="profile image"\r\n            width={50}\r\n            height={50}\r\n            className="rounded-md size-[50px]"\r\n          />\r\n          <div className="absolute bottom-0 right-0 p-[2px] bg-black text-white size-4 ring-white ring-[1.5px] rounded-sm">\r\n            <selectedAccount.icon className="size-3" />\r\n          </div>\r\n        </div>\r\n        <div\r\n          className={cn(\r\n            "text-start min-w-[150px] flex flex-col h-full justify-center",\r\n            isMinimized && "hidden"\r\n          )}\r\n        >\r\n          <span className="block text-sm leading-[1.2]">\r\n            {selectedAccount.name}\r\n          </span>\r\n          <span className="block leading-[1.2] text-foreground/70 text-xs ">\r\n            {selectedAccount.email}\r\n          </span>\r\n        </div>\r\n        <div className={cn("self-center", isMinimized && "hidden")}>\r\n          <ChevronsUpDownIcon className="w-4 h-4" />\r\n        </div>\r\n      </PopoverTrigger>\r\n      <PopoverContent className="p-0">\r\n        {Accounts.map((account) => (\r\n          <UserInfo\r\n            onSelect={() => {\r\n              setSelectedAccount(account);\r\n              setOpen(false);\r\n            }}\r\n            key={account.id}\r\n            email={account.email}\r\n            name={account.name}\r\n            image={account.image}\r\n            Icon={account.icon}\r\n          />\r\n        ))}\r\n      </PopoverContent>\r\n    </Popover>\r\n  );\r\n}\r\n\r\nconst UserInfo = ({\r\n  email,\r\n  name,\r\n  image,\r\n  Icon,\r\n  onSelect,\r\n}: {\r\n  email: string;\r\n  name: string;\r\n  image: string;\r\n  Icon: LucideIcon;\r\n  onSelect: () => void;\r\n}) => {\r\n  return (\r\n    <button\r\n      onClick={onSelect}\r\n      className="flex w-full cursor-pointer gap-3 p-2 shadow-sm border-border border rounded-lg hover:bg-muted"\r\n    >\r\n      <div className="relative">\r\n        <Image\r\n          src={image}\r\n          alt="profile image"\r\n          width={40}\r\n          height={40}\r\n          className="rounded-md"\r\n        />\r\n        <div className="absolute bottom-0 right-0 p-[2px] bg-black text-white size-4 ring-white ring-[1.5px] rounded-sm">\r\n          <Icon className="size-full" />\r\n        </div>\r\n      </div>\r\n      <div className="text-start min-w-[150px] flex flex-1 flex-col h-full justify-center">\r\n        <span className="block text-sm leading-[1.2]">{name}</span>\r\n        <span className="block leading-[1.2] text-foreground/70 text-xs ">\r\n          {email}\r\n        </span>\r\n      </div>\r\n    </button>\r\n  );\r\n};\r\n',
        path: "block/sidebar-01/account-switcher.tsx",
        target: "components/block/sidebar-01/account-switcher.tsx",
      },
      {
        type: "registry:block",
        content:
          '"use client";\r\n\r\nimport { Button } from "@/components/ui/button";\r\nimport {\r\n  CommandDialog,\r\n  CommandEmpty,\r\n  CommandGroup,\r\n  CommandInput,\r\n  CommandItem,\r\n  CommandList,\r\n  CommandSeparator,\r\n  CommandShortcut,\r\n} from "@/components/ui/command";\r\nimport { Input } from "@/components/ui/input";\r\nimport {\r\n  Calculator,\r\n  Calendar,\r\n  CreditCard,\r\n  Search,\r\n  Settings,\r\n  Smile,\r\n  User,\r\n} from "lucide-react";\r\nimport { useEffect, useState } from "react";\r\n\r\nconst SearchInput = ({ isMinimized }: { isMinimized?: boolean }) => {\r\n  const [open, setOpen] = useState(false);\r\n\r\n  useEffect(() => {\r\n    const down = (e: KeyboardEvent) => {\r\n      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {\r\n        e.preventDefault();\r\n        setOpen((open) => !open);\r\n      }\r\n    };\r\n    document.addEventListener("keydown", down);\r\n    return () => document.removeEventListener("keydown", down);\r\n  }, []);\r\n\r\n  if (isMinimized) {\r\n    return (\r\n      <div>\r\n        <Button\r\n          variant="outline"\r\n          onClick={() => {\r\n            setOpen(true);\r\n          }}\r\n          className="size-[50px] p-3 h-10"\r\n        >\r\n          <Search className=" size-4 text-foreground/60" />\r\n        </Button>\r\n        <SearchDialog isOpen={open} onOpenChange={setOpen} />\r\n      </div>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <div>\r\n      <div className="relative">\r\n        <div className="absolute top-1/2 -translate-y-1/2 left-2">\r\n          <Search className="size-3 text-foreground/60" />\r\n        </div>\r\n        <Input\r\n          onFocus={(e) => {\r\n            setOpen(true);\r\n            e.target.blur();\r\n          }}\r\n          placeholder="Search"\r\n          className="pl-7 bg-card h-10"\r\n        />\r\n        <div className="absolute h-full flex items-center justify-center top-1/2 -translate-y-1/2 right-2">\r\n          <kbd className="pointer-events-none inline-flex h-[50%] select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">\r\n            <span className="text-[10px]">⌘</span>K\r\n          </kbd>\r\n        </div>\r\n      </div>\r\n      <SearchDialog isOpen={open} onOpenChange={setOpen} />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default SearchInput;\r\n\r\nconst SearchDialog = ({\r\n  isOpen,\r\n  onOpenChange,\r\n}: {\r\n  isOpen: boolean;\r\n  onOpenChange: (isOpen: boolean) => void;\r\n}) => {\r\n  return (\r\n    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>\r\n      <CommandInput placeholder="Type a command or search..." />\r\n      <CommandList>\r\n        <CommandEmpty>No results found.</CommandEmpty>\r\n        <CommandGroup heading="Suggestions">\r\n          <CommandItem>\r\n            <Calendar className="mr-2 h-4 w-4" />\r\n            <span>Calendar</span>\r\n          </CommandItem>\r\n          <CommandItem>\r\n            <Smile className="mr-2 h-4 w-4" />\r\n            <span>Search Emoji</span>\r\n          </CommandItem>\r\n          <CommandItem>\r\n            <Calculator className="mr-2 h-4 w-4" />\r\n            <span>Calculator</span>\r\n          </CommandItem>\r\n        </CommandGroup>\r\n        <CommandSeparator />\r\n        <CommandGroup heading="Settings">\r\n          <CommandItem>\r\n            <User className="mr-2 h-4 w-4" />\r\n            <span>Profile</span>\r\n            <CommandShortcut>⌘P</CommandShortcut>\r\n          </CommandItem>\r\n          <CommandItem>\r\n            <CreditCard className="mr-2 h-4 w-4" />\r\n            <span>Billing</span>\r\n            <CommandShortcut>⌘B</CommandShortcut>\r\n          </CommandItem>\r\n          <CommandItem>\r\n            <Settings className="mr-2 h-4 w-4" />\r\n            <span>Settings</span>\r\n            <CommandShortcut>⌘S</CommandShortcut>\r\n          </CommandItem>\r\n        </CommandGroup>\r\n      </CommandList>\r\n    </CommandDialog>\r\n  );\r\n};\r\n',
        path: "block/sidebar-01/search.tsx",
        target: "components/block/sidebar-01/search.tsx",
      },
      {
        type: "registry:block",
        content:
          '"use client";\r\n\r\nimport { Separator } from "@/components/ui/separator";\r\nimport { cn } from "@/lib/utils";\r\nimport { usePathname } from "next/navigation";\r\nimport {\r\n  Bell,\r\n  ChevronDownIcon,\r\n  CircleDollarSign,\r\n  HandCoins,\r\n  HelpCircle,\r\n  HomeIcon,\r\n  Package,\r\n  Settings,\r\n  ShoppingCart,\r\n  TicketSlash,\r\n  User,\r\n} from "lucide-react";\r\nimport { useState } from "react";\r\n\r\ntype MenuItem =\r\n  | {\r\n      name: string;\r\n      url: string;\r\n      icon: React.FC;\r\n    }\r\n  | {\r\n      name: string;\r\n      icon: React.FC;\r\n      children: MenuItem[];\r\n    };\r\n\r\nconst menuItems = [\r\n  [\r\n    {\r\n      name: "Home",\r\n      url: "/",\r\n      icon: HomeIcon,\r\n    },\r\n    {\r\n      name: "Products",\r\n      url: "/products",\r\n      icon: ShoppingCart,\r\n    },\r\n    {\r\n      name: "Payments",\r\n      icon: HandCoins,\r\n      children: [\r\n        {\r\n          name: "Payments",\r\n          url: "/payment",\r\n          icon: CircleDollarSign,\r\n        },\r\n        {\r\n          name: "Refunds",\r\n          url: "/refunds",\r\n          icon: TicketSlash,\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      name: "Customers",\r\n      url: "/customers",\r\n      icon: User,\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      name: "Resources",\r\n      url: "/resources",\r\n      icon: Package,\r\n    },\r\n    {\r\n      name: "Notifications",\r\n      url: "/notifications",\r\n      icon: Bell,\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      name: "Support",\r\n      url: "/support",\r\n      icon: HelpCircle,\r\n    },\r\n    {\r\n      name: "Settings",\r\n      url: "/settings",\r\n      icon: Settings,\r\n    },\r\n  ],\r\n] satisfies MenuItem[][];\r\n\r\nconst NavigationMenu = ({ isMinimized }: { isMinimized?: boolean }) => {\r\n  const currentPathname = usePathname();\r\n  console.log(currentPathname);\r\n  return (\r\n    <nav>\r\n      {menuItems.map((section, index) => (\r\n        <div className="flex flex-col gap-4 mb-4">\r\n          <ul className="space-y-1">\r\n            {section.map((item) => (\r\n              <NavigationLink\r\n                isMinimized={isMinimized}\r\n                key={item.url}\r\n                item={item}\r\n                currentPathname={currentPathname}\r\n              />\r\n            ))}\r\n          </ul>\r\n          {index + 1 < menuItems.length && (\r\n            <Separator className="bg-transparent border-t border-dotted border-foreground/30" />\r\n          )}\r\n        </div>\r\n      ))}\r\n    </nav>\r\n  );\r\n};\r\n\r\nexport default NavigationMenu;\r\n\r\nconst NavigationLink = ({\r\n  item,\r\n  isMinimized,\r\n  currentPathname,\r\n}: {\r\n  item: (typeof menuItems)[number][number];\r\n  isMinimized?: boolean;\r\n  currentPathname: string;\r\n}) => {\r\n  const [isOpen, setIsOpen] = useState(true);\r\n  return (\r\n    <li key={item.url} className="w-full">\r\n      {item.children ? (\r\n        <button\r\n          onClick={() => setIsOpen(!isOpen)}\r\n          className={\r\n            "flex w-full items-center group/nav-link gap-4 px-3 py-2.5 hover:bg-primary/80 rounded-md hover:text-primary-foreground"\r\n          }\r\n        >\r\n          <item.icon className="text-foreground/70 group/nav-link-hover:text-primary-foreground size-6" />\r\n          <span className={cn(isMinimized && "hidden")}>{item.name}</span>\r\n          <div className={cn(isMinimized && "hidden", "ml-auto")}>\r\n            <ChevronDownIcon\r\n              className={`w-4 h-4 transition-transform ${\r\n                isOpen ? "rotate-180" : ""\r\n              }`}\r\n            />\r\n          </div>\r\n        </button>\r\n      ) : (\r\n        <a\r\n          href={item.url}\r\n          className={cn(\r\n            "flex items-center group/nav-link gap-4 px-3 py-2.5 hover:bg-primary/80 rounded-md hover:text-primary-foreground",\r\n            currentPathname === item.url && "bg-primary"\r\n          )}\r\n        >\r\n          <item.icon className="text-foreground/70 group/nav-link-hover:text-primary-foreground size-6" />\r\n          <span className={cn(isMinimized && "hidden")}>{item.name}</span>\r\n        </a>\r\n      )}\r\n\r\n      {item.children && isOpen && (\r\n        <ul\r\n          className={cn(\r\n            "ml-4 space-y-1 relative before:content-[\'\'] before:absolute before:w-[3px] before:h-[calc(100%-20px)] before:border-l before:border-foreground/30",\r\n            isMinimized && "before:hidden ml-0"\r\n          )}\r\n        >\r\n          {item.children.map((child, index) => (\r\n            <li\r\n              key={index}\r\n              className={cn(\r\n                `relative before:content-[\'\'] before:absolute before:w-[15px] before:h-[5px] before:top-[20px]\r\n      before:border-l before:border-b before:border before:border-l-foreground/30\r\n      before:border-b-foreground/30 before:rounded-bl-[50%] before:border-t-0 before:border-r-0`,\r\n                isMinimized && "before:hidden"\r\n              )}\r\n            >\r\n              <a\r\n                className={cn(\r\n                  "flex ml-4 group/nav-link items-center gap-4 px-3 h-10 hover:bg-primary rounded-md hover:text-primary-foreground",\r\n                  isMinimized && "ml-0",\r\n                  currentPathname === child.url &&\r\n                    "bg-primary text-primary-foreground"\r\n                )}\r\n                href={child.url}\r\n              >\r\n                <child.icon className="text-foreground/70 size-5 group/nav-link-hover:text-primary-foreground" />\r\n                <span className={cn(isMinimized && "hidden")}>\r\n                  {child.name}\r\n                </span>\r\n              </a>\r\n            </li>\r\n          ))}\r\n        </ul>\r\n      )}\r\n    </li>\r\n  );\r\n};\r\n',
        path: "block/sidebar-01/navigation-menu.tsx",
        target: "components/block/sidebar-01/navigation-menu.tsx",
      },
    ],
    component: React.lazy(
      () => import("./preview/blocks/sidebar-01/sidebar-01")
    ),
  },
  "sidebar-02": {
    name: "sidebar-02",
    type: "registry:block",
    registryDependencies: [
      "progress",
      "https://www.uicart.io/registry/hint.json",
    ],
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        type: "registry:block",
        content:
          '"use client";\r\n\r\nimport { cn } from "@/lib/utils";\r\nimport {\r\n  Bell,\r\n  ChevronLeft,\r\n  HelpCircle,\r\n  HomeIcon,\r\n  Layers2,\r\n  LucideIcon,\r\n  Package,\r\n  Settings,\r\n  ShoppingCart,\r\n  User,\r\n} from "lucide-react";\r\nimport Link from "next/link";\r\nimport { Dispatch, SetStateAction, useState } from "react";\r\nimport { Progress } from "@/components/ui/progress";\r\nimport { Hint } from "@/components/ui/hint";\r\nimport { motion } from "framer-motion";\r\nimport { usePathname } from "next/navigation";\r\n\r\ntype MenuItem = {\r\n  name: string;\r\n  url: string;\r\n  icon: React.FC;\r\n  notifications?: number;\r\n};\r\n\r\nconst menuItems = [\r\n  {\r\n    name: "Home",\r\n    url: "/",\r\n    icon: HomeIcon,\r\n    notifications: 3,\r\n  },\r\n  {\r\n    name: "Products",\r\n    url: "/products",\r\n    icon: ShoppingCart,\r\n  },\r\n  {\r\n    name: "Customers",\r\n    url: "/customers",\r\n    icon: User,\r\n  },\r\n  {\r\n    name: "Resources",\r\n    url: "/resources",\r\n    icon: Package,\r\n  },\r\n  {\r\n    name: "Notifications",\r\n    url: "/notifications",\r\n    icon: Bell,\r\n  },\r\n  {\r\n    name: "Support",\r\n    url: "/support",\r\n    icon: HelpCircle,\r\n  },\r\n  {\r\n    name: "Settings",\r\n    url: "/settings",\r\n    icon: Settings,\r\n  },\r\n] satisfies MenuItem[];\r\n\r\nconst Sidebar02 = () => {\r\n  const [open, setOpen] = useState(true);\r\n  const currentPathname = usePathname();\r\n  return (\r\n    <motion.aside\r\n      layout\r\n      className="sticky top-0 h-screen text-background shrink-0 border-r border-slate-300 bg-white p-2"\r\n      style={{ width: open ? "225px" : "fit-content" }}\r\n    >\r\n      <div className="flex flex-col gap-y-4 h-full">\r\n        <TitleSection open={open} />\r\n        <NavigationMenu open={open} currentPathname={currentPathname} />\r\n        <div className="mt-auto space-y-2">\r\n          <UsageMeter open={open} progress={60} />\r\n          <ToggleClose open={open} setOpen={setOpen} />\r\n        </div>\r\n      </div>\r\n    </motion.aside>\r\n  );\r\n};\r\n\r\nconst TitleSection = ({ open }: { open: boolean }) => {\r\n  return (\r\n    <div className="py-2">\r\n      <div className="flex cursor-pointer items-center hover:bg-slate-100 rounded-md">\r\n        <div className="flex items-center gap-2">\r\n          <motion.div layout className="bg-primary rounded-md p-2 size-10">\r\n            <Layers2 className="text-primary-foreground" />\r\n          </motion.div>\r\n          {open && (\r\n            <motion.div\r\n              initial={{ opacity: 0, y: 12 }}\r\n              animate={{ opacity: 1, y: 0 }}\r\n              transition={{ delay: 0.125 }}\r\n              layout\r\n            >\r\n              <span className="block text-xs font-semibold">Acme Company</span>\r\n              <span className="block text-xs text-background/70">Pro Plan</span>\r\n            </motion.div>\r\n          )}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nconst NavigationMenu = ({\r\n  open,\r\n  currentPathname,\r\n}: {\r\n  open: boolean;\r\n  currentPathname: string;\r\n}) => {\r\n  return (\r\n    <nav>\r\n      <ul className="space-y-1">\r\n        {menuItems &&\r\n          menuItems.map((item) => {\r\n            return (\r\n              <NavigationLink\r\n                key={item.name}\r\n                title={item.name}\r\n                Icon={item.icon}\r\n                href={item.url}\r\n                open={open}\r\n                notifications={item.notifications}\r\n                isActive={currentPathname === item.url}\r\n              />\r\n            );\r\n          })}\r\n      </ul>\r\n    </nav>\r\n  );\r\n};\r\n\r\nconst NavigationLink = ({\r\n  title,\r\n  Icon,\r\n  href,\r\n  open,\r\n  notifications,\r\n  isActive,\r\n}: {\r\n  title: string;\r\n  Icon: LucideIcon;\r\n  href: string;\r\n  open: boolean;\r\n  isActive?: boolean;\r\n  notifications?: number;\r\n}) => {\r\n  return (\r\n    <Hint\r\n      delay={100}\r\n      enabled={!open}\r\n      content={title}\r\n      animationFrom="left"\r\n      animationStiffness={150}\r\n    >\r\n      <li className="w-full">\r\n        <Link\r\n          href={href}\r\n          className={cn(\r\n            "flex items-center px-1 w-full py-2 gap-2 justify-center hover:bg-primary/30 hover:text-primary rounded-md",\r\n            open && "justify-start",\r\n            isActive && "bg-primary/20 text-primary transition-all"\r\n          )}\r\n        >\r\n          <motion.div layout>\r\n            <Icon className="size-5" />\r\n          </motion.div>\r\n          {open && (\r\n            <motion.span\r\n              layout\r\n              initial={{ opacity: 0, y: 12 }}\r\n              animate={{ opacity: 1, y: 0 }}\r\n              transition={{ delay: 0.2 }}\r\n              className="text-xs font-medium"\r\n            >\r\n              {title}\r\n            </motion.span>\r\n          )}\r\n          {notifications && open && (\r\n            <motion.span\r\n              layout\r\n              initial={{ opacity: 0, y: 12 }}\r\n              animate={{ opacity: 1, y: 0 }}\r\n              transition={{ delay: 0.2 }}\r\n              className="text-xs font-medium text-primary bg-primary/30 px-1 h-full rounded-sm ml-auto mr-2"\r\n            >\r\n              {notifications}\r\n            </motion.span>\r\n          )}\r\n        </Link>\r\n      </li>\r\n    </Hint>\r\n  );\r\n};\r\n\r\nconst UsageMeter = ({\r\n  progress,\r\n  open,\r\n}: {\r\n  progress: number;\r\n  open: boolean;\r\n}) => {\r\n  const [isDismissed, setIsDismissed] = useState(false);\r\n  const maxScore = 100;\r\n  const progressInPercentage = (progress / maxScore) * 100;\r\n  const strokeWidth = 15;\r\n  const radius = 70;\r\n  const circumference = 2 * Math.PI * radius;\r\n  const strokeDashoffset =\r\n    circumference - (progressInPercentage / 100) * circumference;\r\n  if (isDismissed) return null;\r\n\r\n  if (open) {\r\n    return (\r\n      <div className="bg-primary/30 p-2 rounded-md text-primary text-sm space-y-3">\r\n        <motion.div\r\n          initial={{ opacity: 0, y: 12 }}\r\n          animate={{ opacity: 1, y: 0 }}\r\n          transition={{ delay: 0.2 }}\r\n          layout\r\n          className=""\r\n        >\r\n          <span className="block font-semibold">Used Space</span>\r\n          <span>\r\n            Your team has used 80% of your available space. Need more?\r\n          </span>\r\n        </motion.div>\r\n        <motion.div\r\n          layout\r\n          initial={{ opacity: 0 }}\r\n          animate={{ opacity: 1 }}\r\n          transition={{ delay: 0.25 }}\r\n        >\r\n          <Progress value={progress} />\r\n        </motion.div>\r\n\r\n        <motion.div\r\n          initial={{ opacity: 0, y: 12 }}\r\n          animate={{ opacity: 1, y: 0 }}\r\n          transition={{ delay: 0.125 }}\r\n          className="flex gap-2 text-xs"\r\n        >\r\n          <button\r\n            onClick={() => setIsDismissed(true)}\r\n            className="hover:underline"\r\n          >\r\n            Dismiss\r\n          </button>\r\n          <Link className="hover:underline" href="/upgrade">\r\n            Upgrade plan\r\n          </Link>\r\n        </motion.div>\r\n      </div>\r\n    );\r\n  } else {\r\n    return (\r\n      <motion.div layout className="relative">\r\n        <svg className="size-10 -rotate-90 transform" viewBox="0 0 160 160">\r\n          <circle\r\n            className="text-gray-200 transition-all duration-300 ease-in-out"\r\n            strokeWidth={strokeWidth}\r\n            stroke="currentColor"\r\n            fill="transparent"\r\n            r={radius}\r\n            cx="80"\r\n            cy="80"\r\n          />\r\n          <motion.circle\r\n            initial={{ strokeDashoffset: circumference }}\r\n            animate={{ strokeDashoffset }}\r\n            className="text-primary transition-all duration-500 ease-in-out"\r\n            strokeWidth={strokeWidth}\r\n            strokeDasharray={circumference}\r\n            strokeLinecap="round"\r\n            stroke="currentColor"\r\n            fill="transparent"\r\n            r={radius}\r\n            cx="80"\r\n            cy="80"\r\n          />\r\n        </svg>\r\n        <div className="absolute inset-0 flex flex-col items-center justify-center">\r\n          <span className="text-sm font-bold text-primary">{progress}</span>\r\n        </div>\r\n      </motion.div>\r\n    );\r\n  }\r\n};\r\n\r\nconst ToggleClose = ({\r\n  open,\r\n  setOpen,\r\n}: {\r\n  open: boolean;\r\n  setOpen: Dispatch<SetStateAction<boolean>>;\r\n}) => {\r\n  return (\r\n    <button\r\n      className="flex w-full items-center p-2 hover:bg-primary/30 rounded-md"\r\n      onClick={() => setOpen((prev) => !prev)}\r\n    >\r\n      {open && (\r\n        <motion.span layout className="text-sm font-medium">\r\n          Collapse\r\n        </motion.span>\r\n      )}\r\n      <motion.div layout className="ml-auto">\r\n        <ChevronLeft\r\n          className={cn(\r\n            !open && "rotate-180",\r\n            "size-5 text-background/70 transition-all duration-300 ease-in-out"\r\n          )}\r\n        />\r\n      </motion.div>\r\n    </button>\r\n  );\r\n};\r\n\r\nexport default Sidebar02;\r\n',
        path: "block/sidebar-02/sidebar-02.tsx",
        target: "components/block/sidebar-02/sidebar-02.tsx",
      },
    ],
    component: React.lazy(
      () => import("./preview/blocks/sidebar-02/sidebar-02")
    ),
  },
  hint: {
    name: "hint",
    type: "registry:ui",
    registryDependencies: ["tooltip"],
    dependencies: ["framer-motion"],
    files: [
      {
        type: "registry:ui",
        content:
          '"use client";\r\n\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from "@/components/ui/tooltip";\r\nimport { motion } from "framer-motion";\r\n\r\ntype HintProps = {\r\n  content: string;\r\n  children: React.ReactNode;\r\n  animationFrom?: "top" | "bottom" | "left" | "right";\r\n  defaultOpen?: boolean;\r\n  className?: string;\r\n  asChild?: boolean;\r\n  onOpenChange?: (isOpen: boolean) => void;\r\n  isAnimating?: boolean;\r\n  enabled?: boolean;\r\n  delay?: number;\r\n  animationDuration?: number;\r\n  animationStiffness?: number;\r\n};\r\n\r\nexport function Hint({\r\n  content,\r\n  children,\r\n  className,\r\n  animationFrom = "top",\r\n  asChild = false,\r\n  defaultOpen = false,\r\n  onOpenChange,\r\n  enabled = true,\r\n  delay = 0,\r\n  animationDuration,\r\n  isAnimating = true,\r\n  animationStiffness = 260,\r\n}: HintProps) {\r\n  // Define the motion variants based on direction\r\n  const variants = {\r\n    initial: {\r\n      opacity: 0,\r\n      x: animationFrom === "left" ? -20 : animationFrom === "right" ? 20 : 0,\r\n      y: animationFrom === "top" ? -20 : animationFrom === "bottom" ? 20 : 0,\r\n      scale: 0.8,\r\n    },\r\n    animate: {\r\n      opacity: 1,\r\n      x: 0,\r\n      y: 0,\r\n      scale: 1,\r\n      transition: {\r\n        type: "spring",\r\n        stiffness: animationStiffness,\r\n        damping: 10,\r\n        duration: !isAnimating ? 0 : animationDuration,\r\n      },\r\n    },\r\n    exit: {\r\n      opacity: 0,\r\n      x: animationFrom === "left" ? -20 : animationFrom === "right" ? 20 : 0,\r\n      y: animationFrom === "top" ? -20 : animationFrom === "bottom" ? 20 : 0,\r\n      scale: 0.6,\r\n    },\r\n  };\r\n  if(!enabled) return <>{children}</>;  \r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip\r\n        delayDuration={delay}\r\n        onOpenChange={onOpenChange}\r\n        defaultOpen={defaultOpen}\r\n      >\r\n        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>\r\n        <TooltipContent side={animationFrom} asChild>\r\n          <motion.p\r\n            variants={variants}\r\n            initial="initial"\r\n            animate="animate"\r\n            exit="exit"\r\n            className={className}\r\n          >\r\n            {content}\r\n          </motion.p>\r\n        </TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}',
        path: "ui/hint.tsx",
        target: "components/ui/hint.tsx",
      },
    ],
    component: React.lazy(() =>
      import("./preview/ui/hint")
    ),
  },
} as const;
