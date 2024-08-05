// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Array to hold the list of tracks
    let tracks = [];

    // Function to render the tracks in the table
    function renderTracks() {
        const trackList = document.getElementById('trackList');
        trackList.innerHTML = '';
        tracks.forEach((track, index) => {
            trackList.innerHTML += `
                <tr>
                    <td>${track.artist}</td>
                    <td>${track.title}</td>
                    <td>${track.album}</td>
                    <td>${track.genre}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editTrack(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteTrack(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // Function to add a new track
    document.getElementById('musicForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const artist = document.getElementById('artist').value;
        const title = document.getElementById('title').value;
        const album = document.getElementById('album').value;
        const genre = document.getElementById('genre').value;

        // Add the new track to the array
        tracks.push({ artist, title, album, genre });

        // Clear the form inputs
        document.getElementById('musicForm').reset();

        // Render the updated track list
        renderTracks();
    });

    // Function to delete a track
    window.deleteTrack = function(index) {
        tracks.splice(index, 1);
        renderTracks();
    }

    // Function to edit a track
    window.editTrack = function(index) {
        const track = tracks[index];
        document.getElementById('artist').value = track.artist;
        document.getElementById('title').value = track.title;
        document.getElementById('album').value = track.album;
        document.getElementById('genre').value = track.genre;

        // Remove the track from the array
        tracks.splice(index, 1);

        // Render the updated track list
        renderTracks();
    }
});