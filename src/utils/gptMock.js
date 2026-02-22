export const getMockMovieNames = (query = "") => {
    const q = query.toLowerCase();

    // Funny + Retro (auto assume Indian if not specified)
    if (q.includes("funny") && (q.includes("retro") || q.includes("old") || q.includes("classic"))) {
        if (q.includes("hollywood")) {
            return [
                "Airplane!",
                "The Naked Gun",
                "Groundhog Day",
                "Back to the Future",
                "Home Alone",
            ];
        }

        // Default to Indian retro if not specified
        return [
            "Chupke Chupke",
            "Gol Maal 1979",
            "Jaane Bhi Do Yaaro",
            "Andaz Apna Apna",
            "Hera Pheri",
        ];
    }

    // Explicit Indian
    if (q.includes("indian") || q.includes("bollywood")) {
        return [
            "3 Idiots",
            "Lagaan",
            "Queen",
            "Drishyam",
            "Zindagi Na Milegi Dobara",
        ];
    }

    // Explicit Hollywood
    if (q.includes("hollywood")) {
        return [
            "Inception",
            "The Dark Knight",
            "Interstellar",
            "Gladiator",
            "The Matrix",
        ];
    }

    if (q.includes("horror")) {
        return ["Stree", "Tumbbad", "The Conjuring", "Insidious", "A Quiet Place"];
    }

    // Default fallback
    return [
        "3 Idiots",
        "Taare Zameen Par",
        "Queen",
        "Lagaan",
        "Drishyam",
    ];
};