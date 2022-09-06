user(c):{
    documentId(d):{
        name:string
        email:String(f)
        pass:String(f)

        info(sc):{
            documentId(d):{
                title(命題): String(f)
                content(詳細): String(f)
                questioner(質問者): String(f)
                timeStamp(タイムスタンプ): timeStamp(f)
                bookmark(いいね): boolean(f)
            },
            documentId(d):{
                title(命題): String(f)
                content(詳細): String(f)
                questioner(質問者): String(f)
                timeStamp(タイムスタンプ): timeStamp(f)
                bookmark(いいね): boolean(f)
            },
        }(info)
        }
    }
}


------------------------
        question(sc):{
            document(d):{
                title(質問): String(f)
                content(内容): String(f)
                (観覧数):number(f)
                (回答数):number(f)
                
            }
------------------------
users(c):{
    document(d):{

            1:{
                title(命題): String(f)
                content(詳細): String(f)
                questioner(質問者): String(f)
                timeStamp(タイムスタンプ): timeStamp(f)
                bookmark(いいね): boolean(f) 
            }
        }
        質問箱map(f):{
            0:{
                title(質問): String(f)
                content(内容): String(f)
                (観覧数):number(f)
                (回答数):number(f)
                回答map(f):{
                    0:{
                        answer1(回答):String(f)
                        timeStamp(タイムスタンプ): timeStamp(f)
                    },
                    1:{
                        ...
                    },
                }
            },  
    }(document)
}

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
