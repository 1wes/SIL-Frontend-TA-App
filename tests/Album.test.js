import React from "react";
import { render, screen, waitFor } from "./setUpTests";
import Album from "../src/components/album";
import * as swr from "swr";

jest.mock("swr");

// Mock album data
const mockAlbum = { id: 1, title: 'Album 1' };

// mock photos
const mockPhotos = [
    { id: 1, title: 'Photo 1', albumId: '1' },
    { id: 2, title: 'Photo 2', albumId: '1' },
    { id: 3, title: 'Photo 3', albumId: '1' },
  ];

// Mock useParams
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ albumId: '1' }),
}));

describe("Album Component", () => {

  test("should fetch the album and display its name", async () => {
    // Custom implementation of useSWR
    swr.default = jest.fn((key, fetcher) => {
      if (typeof fetcher === "function") {
        return { data: mockAlbum, error: null };
      } else {
        throw new Error("Invalid fetcher function");
      }
    });

    // Render the component
    render(<Album />);

    // Ensure the album name is displayed
    await waitFor(() => {
      expect(screen.getByText("Album 1")).toBeInTheDocument();
    });
  });

  test("should compute and display the total number of photos in the album and list the photos", async () => {

    const mockAlbum = { id: 1, title: 'Album 1' };

    // Mock photos data for the album
    const mockPhotos = [
      { id: 1, title: 'Photo 1' },
      { id: 2, title: 'Photo 2' },
      { id: 3, title: 'Photo 3' },
    ];

    // Mock the useSWR hook to return album and photos data
    swr.default.mockReturnValueOnce({ data: mockAlbum });
    swr.default.mockReturnValueOnce({ data: mockPhotos });

    // Render the component
    render(<Album />);

    // Ensure the h1 element displays the correct computed total number of photos
    await waitFor(() => {

      // check if phot count is computed
      expect(screen.getByText('3 total photos')).toBeInTheDocument();

      // check if photos are listed
      expect(screen.getByText('Photo 1')).toBeInTheDocument();
      expect(screen.getByText('Photo 2')).toBeInTheDocument();
      expect(screen.getByText('Photo 3')).toBeInTheDocument();
    });
  });
  
});