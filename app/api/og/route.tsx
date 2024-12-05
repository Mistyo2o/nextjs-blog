import { NextRequest } from "next/server";
import { ImageResponse } from "next/og"
export const runtime = "edge"

const interBold = fetch(new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer())

export async function GET(req: NextRequest) {
    try {
        const fontBold = await interBold;
        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title")
        if (!title) {
            return new Response("No title provided", { status: 500 })
        }
        const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

        return new ImageResponse( 
        <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '-.02em',
                fontWeight: 700,
                background: 'white',
            }}
        >
            <div
                style={{
                    left: 42,
                    top: 42,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        width: 24,
                        height: 24,
                        background: 'black',
                    }}
                />
                <span
                    style={{
                        marginLeft: 8,
                        fontSize: 20,
                    }}
                >
                    rauchg.com
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h1>{heading}</h1>

                <p style={{ top: '-35', maxWidth: '300px' }}></p>
            </div>

            <div style={{ display: 'flex', position: 'absolute', bottom: '20px', left: 42, fontSize: 12 }}>
                <span>https://github.com</span>
            </div>

            <div style={{ display: 'flex', position: 'absolute', bottom: '20px', right: 42, fontSize: 12 }}>
                <span>https://exemple.com</span>
            </div>
        </div>,
        {
            width:1200,
            height:630,
            fonts: [
                {
                    name: "Inter",
                    data: fontBold,
                    style: "normal",
                    weight: 700
                }
            ]
        })

    } catch (error) {
        return new Response("Failed to generate image", { status: 500 })
    }
}