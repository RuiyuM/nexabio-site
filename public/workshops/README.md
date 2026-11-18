# Workshop materials

The website lists these materials in its Learning resources section. Edit titles,
descriptions, and links in `content/program.json` under `resources.materials`.

## Shared classroom notebooks

- [SMILES: Explore molecules with Python](https://colab.research.google.com/drive/1YvMEODjWr6_MGX9k3jQfVe79Lqh25P8W)
- [Predicting cellular uptake: Interactive ML lab](https://colab.research.google.com/drive/1ugZ1A-kNExLM6tvuwdnn8Lo7b-tMflh9)

Students can view the shared notebooks and use **File → Save a copy in Drive**
to make their own editable copies. Keep the shared links viewable by anyone with
the link so students can open them from the public website.

## Downloadable files

- `pBAE_30min_Interactive_Lab.ipynb`: the pBAE lab, including saved outputs.
- `NEXABio_ML_Concepts_and_Pipeline_Feature_Selection.pptx`: the editable slides.

The notebook uses student-facing explanations and retains its saved results.
The slides are the supplied editable deck. These files are served from
`/nexabio-site/workshops/` after a successful website deployment.

## Updating materials together

Keep the classroom Colab notebook and the notebook in this folder in sync.
Editing one does not automatically update the other. After editing in Colab,
save the notebook, download it as `.ipynb`, and replace the matching file here.
If you edit the repository copy instead, update the existing shared Colab
notebook as well. Preserve its shared URL when possible; if it changes, update
both this README and `content/program.json`.

Replace the PowerPoint file here when revising the slides. Commit the updated
teaching files and any link changes together, then run `npm run build` before
publishing to `main`.
