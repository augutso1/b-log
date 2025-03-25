export const fetchPosts = async () => {
    try {
        // Use a fallback URL if the environment variable is not set
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL

        const response = await fetch(`${apiBaseUrl}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // Using next.js ISR pattern instead of no-store for better static building
            next: { revalidate: 60 } // Revalidate data every 60 seconds
        });

        if (!response.ok) throw new Error("Erro ao buscar posts");
        return await response.json();
    } catch (error) {
        console.error("Falha na busca de posts:", error);
        return [];
    }
};