import express from "express";
import axios from "axios";
import * as cheerio from 'cheerio';



const router = express.Router();

// API Route to Fetch HackerRank Badges
router.get("/hackerrank/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const url = `https://www.hackerrank.com/profile/${username}`;

    const { data } = await axios.get(url);
    console.log(data);
    const $ = cheerio.load(data);

    let badges = [];
    $(".hacker-badge").each((index, element) => {
      const badgeImg = $(element).find("img").attr("src");
      if (badgeImg) {
        badges.push(badgeImg);
      }
    });
    console.log(badges);

    res.json({ username, badges });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data. Invalid username or profile is private." });
  }
});

export default router;
